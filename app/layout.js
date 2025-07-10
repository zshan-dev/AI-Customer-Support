import './globals.css';
/**
 * todo
 * better responses, ex formating
 * local storage memmory of chat or db storage of chat
**/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 