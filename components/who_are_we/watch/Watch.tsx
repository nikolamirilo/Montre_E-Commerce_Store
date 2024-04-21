import moment from "moment"
import Image from "next/image"
import "./style.css"

const Watch = () => {
  return (
    <div className="watch-container">
      <div className="wrapper">
        <div className="watch-strap">
          <div className="strap-circle"></div>
          <div className="strap"></div>
          <div className="watch-strap-holder left-up"></div>
          <div className="watch-strap-holder left-bottom"></div>
          <div className="watch-strap-holder right-up"></div>
          <div className="watch-strap-holder right-bottom"></div>
        </div>
        <div className="watch-case">
          <div className="reflection"></div>
          <div className="reflection bottom"></div>
          <div className="watch-center">
            <div className="watch-points">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="watch-tips">
              <span className="hours"></span>
              <span className="minutes"></span>
              <span className="seconds"></span>
            </div>
            <div className="watch-date">{moment().format("MMM Do")}</div>
            <div className="watch-alert flex justify-center items-center">
              <Image
                src="/brands/poedagar_logo_white.png"
                width={100}
                height={1000}
                alt="Poedagar"
              />
            </div>
            <div className="watch-week">
              <span className="week-arrow !bg-white"></span>
              <ul className="!text-white relative">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </ul>
            </div>
            <div className="watch-day"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch
