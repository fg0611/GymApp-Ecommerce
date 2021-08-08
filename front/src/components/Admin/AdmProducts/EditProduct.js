import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getProductDetail, resetProductDetail } from "../../../redux/actions/productsActions";
import CreateProduct from "../CreateProduct/CreateProduct"
import './EditProduct.css'


export default function EditProduct() {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductDetail(id));
        
        return () => {
            dispatch(resetProductDetail())
        }
    }, [dispatch, id]);

    const product = useSelector(store => store.products.productDetail);

    return (
        <div className='editProduct'>
            {
                product && <CreateProduct edit={product} />
            }
        </div>
    )
}