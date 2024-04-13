import moment from "moment"
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
          <div className="watch-lace">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <span className="top"></span>
            <span className="bottom"></span>
          </div>
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
            <div className="watch-alert">
              <strong>Montre</strong> <br />
              Shop
            </div>
            <div className="watch-week">
              <span className="week-arrow"></span>
              <ul>
                <div className="!text-gray-900">S</div>
                <div className="!text-gray-900">M</div>
                <div className="!text-gray-900">T</div>
                <div className="!text-gray-900">W</div>
                <div className="!text-gray-900">T</div>
                <div className="!text-gray-900">F</div>
                <div className="!text-gray-900">S</div>
              </ul>
            </div>
            <div className="watch-day">
              <div className="sun">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="watch-week days"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch
