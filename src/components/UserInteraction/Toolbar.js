import './styles.css';
function Toolbar({onPlayMovie, onUploadImage}){
    return(<div>
        <button onClick={onPlayMovie}>Play Movie</button> 
        <button onClick={onUploadImage}>Upload Image</button> 

    </div>);
}
export default Toolbar;