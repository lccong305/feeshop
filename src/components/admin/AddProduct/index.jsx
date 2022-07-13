// import React from 'react'

// const AddProduct = () => {
//     return (
//         <div
//             className={`add-wrapper ${Object.entries(prd).length === 0 || id === null ? "" : "active"
//                 }`}
//         >
//             <div className="overlay"></div>
//             <div className="edit-content">
//                 <h2 className="edit-tittle">San pham chi tiet</h2>
//                 <form method="put" encType="multipart/form-data">
//                     <div className="form-group-edit">
//                         <label>Product Name</label>
//                         <input
//                             type="text"
//                             className="product-input-ad"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group-edit">
//                         <label>Price</label>
//                         <input
//                             type="text"
//                             className="product-input-ad"
//                             value={price}
//                             onChange={(e) => setPrice(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group-edit">
//                         <label>Category</label>
//                         <input
//                             type="text"
//                             className="product-input-ad"
//                             value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group-edit">
//                         <label>Description</label>
//                         <input
//                             type="text"
//                             className="product-input-ad"
//                             value={desc}
//                             onChange={(e) => setDesc(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group-edit">
//                         <label>Image</label>
//                         <img src={prd.image} className="product-input-img" />
//                         <input
//                             type="file"
//                             className="product-input-ad"
//                             onChange={handleFileImage}
//                         />
//                     </div>
//                     <div className="form-button-edit">
//                         <button
//                             type="submit"
//                             className="btn btn-primary"
//                             onClick={(e) => handleEdit(e)}
//                         >
//                             Edit
//                         </button>
//                         <button onClick={(e) => handleClose(e)}>Close</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default AddProduct