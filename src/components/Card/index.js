import './index.css'

// Write your code here.

const Card = props => {
  const {eachData} = props
  const {title, description, imgUrl, className} = eachData

  return (
    <div className={`${className} card-container`}>
      <h1 className="heading">{title}</h1>
      <p className="desc">{description}</p>
      <img className="image" src={imgUrl} alt="profile" />
    </div>
  )
}

export default Card
