import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  const apiToken = process.env.CLOUDFLARE_API_TOKEN
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID

  const cfUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/deepseek-ai/deepseek-r1-distill-qwen-32b`
  const body = {
    messages: [
      { role: "system", content: "你是一个AI助手" },
      { role: "user", content: message }
    ]
  }

  const response = await fetch(cfUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`,
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()

  return NextResponse.json({ reply: data.result?.response ?? "不想理你了。" })
}