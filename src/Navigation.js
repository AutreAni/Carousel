const Navigation = ({ srcArr}) => {
    return ( 
        <div className = "navigation">
        {
            srcArr.map((elem, index) => 
                <label htmlFor = {index}
              className ="navigation-btn"/>
            )
        }
        </div>
     );
}
 
export default Navigation;