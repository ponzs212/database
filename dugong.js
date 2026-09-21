new HTML()
  .heading(
    2,
    "📢 Xilent Death Developer Update"
  )
  .blockQuote(
    HTML.bold("🚀 Latest Announcement")
  )
  .paragraph(
    "Selamat datang di update terbaru Xilent Death."
  )
  .divider()
  .heading(
    3,
    "Recommended Command"
  )
  .paragraph(
    "/LautanBunga <bug> dan /ampremium <tools>"
  )
  .divider()
  .heading(
    3,
    "Information"
  )
  .table(
    [
      ["Item", "Status"],
      ["Rich Mode", "🟢 Active"],
      ["Auto Update", "🟢 Active"],
      ["System", "🟢 Online"]
    ],
    {
      bordered: true,
      striped: true,
      hasHeader: true
    }
  )
  .divider()
  .blockQuote(
    HTML.bold(
      "💡 Update akan otomatis diambil dari GitHub setiap /start."
    )
  )
  .build()
