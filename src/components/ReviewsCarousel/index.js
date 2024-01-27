// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {ind: 0, leng: 0}

  leftarrowclick = () => {
    const {ind} = this.state
    if (ind > 0) {
      this.setState(prevstate => ({ind: prevstate.ind - 1}))
    }
  }

  rightarrowclick = () => {
    const {ind, leng} = this.state
    console.log(leng)
    if (ind < leng - 1) {
      this.setState(prevstate => ({ind: prevstate.ind + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    this.state.leng = reviewsList.length

    const {ind} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[ind]

    return (
      <div className="mainnn">
        <div className="main">
          <h1 className="head">Reviews</h1>
          <img src={imgUrl} className="pic" alt={username} />
          <div className="arrowcard">
            <button
              onClick={this.leftarrowclick}
              type="button"
              data-testid="leftArrow"
              className="arr"
            >
              <img
                className="arr"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>

            <p className="name">{username}</p>
            <button
              onClick={this.rightarrowclick}
              type="button"
              data-testid="rightArrow"
              className="arr"
            >
              <img
                className="arr"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="companyname">{companyName}</p>
          <p className="desc">{description} </p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
