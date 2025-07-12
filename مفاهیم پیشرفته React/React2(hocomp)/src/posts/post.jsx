import MouseCountComponent from "./MouseCount"
import ClickCountComponent from "./ClickCount"

const Post = () => {
    return(
        <div className="post">
            <h4 className="hNav">مدیریت پست ها</h4>
            <ClickCountComponent/>
            <MouseCountComponent/>
        </div>
    )
}

export default Post