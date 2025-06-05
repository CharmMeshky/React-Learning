import Clickcount from "./Clickcount"
import Mousecount from "./hovermouse"

const Post = () => {
    return(
        <div className="post">
            <h4 className="hNav">مدیریت پست ها</h4>
            <div className="btns">
                <Clickcount/>
                <Mousecount/>
            </div>
        </div>
    )
}

export default Post