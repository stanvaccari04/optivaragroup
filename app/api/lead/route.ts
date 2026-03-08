import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Basic server-side validation
    const { name, email, formType } = body

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ ok: false, error: 'Name is required.' }, { status: 400 })
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Valid email is required.' }, { status: 400 })
    }

    // In production: send to CRM, email service, or database
    // For now, log and return success
    console.log('[Lead]', {
      formType: formType || 'unknown',
      name: name.trim(),
      email: email.trim(),
      company: body.company || '',
      role: body.role || '',
      protection: body.protection || '',
      context: body.context || '',
      message: body.message || '',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ ok: false, error: 'Internal server error.' }, { status: 500 })
  }
}
