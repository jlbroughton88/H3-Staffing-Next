function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.8;
            color: #333;
            font-family: Open-Sans;
          }

        `}</style>
      </div>
    )
  }
  
  export default Layout