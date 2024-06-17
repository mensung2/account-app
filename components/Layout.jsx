const Layout = ({ children }) => {
  return (
    <section>
      <div>헤더처럼 쓸수있다구~</div>
      {children}
    </section>
  );

  // 헤더같이 고정적으로 뭐 넣고싶은 거 있으면 넣는 곳임 그냥
};

export default Layout;
