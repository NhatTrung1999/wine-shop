import Interest from "./Interest";

export default function Card(props) {

  return (
    <div key={props.id} className="box">
      <div>
        <img className="product_img" src={props.image} alt="product" />
        <div className="content">
          <div className="title">
            <span style={{textAlign: 'center'}}>{props.title}</span>
          </div>
          <div className="price">
            <span>Giá: {props.price.toLocaleString()} VNĐ</span>
          </div>
        </div>
      </div>
      <Interest interest={props.isInterest} id={props.id} />
    </div>
  );
}
