export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Updated style objects below */}
        <div 
          id="frame" 
          style={{ width: "100%", margin: "auto", position: "relative", zIndex: 99998 }}
        >
          <iframe 
            data-aa="2425973" 
            src="//acceptable.a-ads.com/2425973/?size=Adaptive"
            style={{ border: 0, padding: 0, width: "70%", height: "auto", overflow: "hidden", display: "block", margin: "auto" }}
          />
        </div>
      </body>
    </html>
  );
}
