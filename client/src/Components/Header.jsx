import React from 'react'

const Header = () => {
  return (
    <div style={{
      width: "100%",
      backgroundColor: "#212529",
      height: "10vh",
      display: "flex",
      flexDirection: "row",
      alignItems: "center", 
      padding: "0 5px", 
    }}>
       <img 
         src="https://res.cloudinary.com/dcgg69bgh/image/upload/v1731503276/Pngtree_flattening_icon_download_4440092_nug9mb.png" 
         alt="Logo" 
         style={{
           height: "80px",
        //    marginRight: "10px", 
        marginLeft:"10px",
         }} 
       />
       <h6 style={{
         color: "white",
         fontSize: "24px", 
         margin: 0, 
       }}>
         Task Manager
       </h6>
    </div>
  )
}

export default Header;
