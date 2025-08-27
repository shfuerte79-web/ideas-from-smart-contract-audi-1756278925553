import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '```json
[
  {
    "title": "AI-Powered Bug Bounty Platform",
    "description": "منصة تجمع بين الذكاء الاصطناعي والمكافآت لتشجيع المطورين على اكتشاف الثغرات في العقود الذكية.",
    "mvp_plan": "إنشاء واجهة بسيطة تسمح للمستخدمين بتقديم تقارير عن الثغرات، واستخدام الذكاء الاصطناعي لتقييم خطورة الثغرات وتحديد المكافآت المناسبة."
  },
  {
    "title": "Smart Contract Compliance Checker",
    "description": "أداة تستخدم الذكاء الاصطناعي للتحقق من توافق العقود الذكية مع اللوائح والقوانين المحلية والدولية.",
    "mvp_plan": "تطوير واجهة مستخدم بسيطة لتحميل العقود الذكية، واستخدام نموذج ذكاء اصطناعي لتحليل النصوص وتحديد نقاط عدم التوافق."
  },
  {
    "title": "Real-Time Smart Contract Risk Assessment",
    "description": "أداة تقدم تقييمًا فوريًا للمخاطر المرتبطة بالعقود الذكية أثناء تطويرها.",
    "mvp_plan": "إنشاء واجهة تفاعلية تسمح للمطورين بإدخال كود العقد الذكي، واستخدام خوارزميات الذكاء الاصطناعي لتقديم تقييمات فورية للمخاطر."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}