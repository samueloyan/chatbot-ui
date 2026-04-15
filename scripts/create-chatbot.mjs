import { copyFileSync, existsSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { resolve } from "node:path"

const args = new Set(process.argv.slice(2))
const shouldStart = args.has("--start")

const envExamplePath = resolve(".env.local.example")
const envPath = resolve(".env.local")

console.log("🚀 Chatbot UI setup helper")

if (!existsSync(envPath)) {
  if (existsSync(envExamplePath)) {
    copyFileSync(envExamplePath, envPath)
    console.log("✅ Created .env.local from .env.local.example")
  } else {
    console.log("⚠️ Could not find .env.local.example to bootstrap environment variables")
  }
} else {
  console.log("✅ .env.local already exists")
}

console.log("\nNext steps:")
console.log("1) Fill .env.local values (from `supabase status`)")
console.log("2) Start Supabase: `supabase start`")
console.log("3) Run the app: `npm run chat`")

if (shouldStart) {
  console.log("\n▶️ Starting Chatbot UI with `npm run chat`...")
  const result = spawnSync("npm", ["run", "chat"], { stdio: "inherit", shell: true })

  if (typeof result.status === "number") {
    process.exit(result.status)
  }

  process.exit(1)
}
