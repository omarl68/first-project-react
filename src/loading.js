const loading = () => {
    return ( <div className="loader">
    <div className="loader-inner">
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line"></div>
      </div>
    </div>
    <div className="text-loading" >Loading...</div>
  </div> );
}
 
export default loading;