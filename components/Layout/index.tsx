export default function Layout({ children, title }: LayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <header></header>
      {children}
    </div>
  );
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}
