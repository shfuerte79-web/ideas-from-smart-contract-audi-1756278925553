export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Smart Contract Auditor AI
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}