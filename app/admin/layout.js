export const metadata = {
  title: "Dandotiya Heritage — Admin CMS",
};

export default function AdminLayout({ children }) {
  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        all: "initial",
        display: "block",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: "#1A0F00",
        fontSize: 16,
        lineHeight: 1.5,
      }}
    >
      <style>{`
        .admin-root, .admin-root * {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }
        .admin-root input, .admin-root textarea, .admin-root button {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }
      `}</style>
      <div className="admin-root">
        {children}
      </div>
    </div>
  );
}
