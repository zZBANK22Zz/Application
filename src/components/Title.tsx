// function that returns some HTML -> Component

// Normal function
// function Title() {
//     return (
//         <div>
//             Title
//         </div>
//     )
// }

// Arrow function
// Normal export
// export const Title1 = () => {
//     return (
//         <div>
//             Title
//         </div>
//     )
// }

// export default (good pratice => 1 file = 1 component)
const Title = () => {
    return (
        <div>
            <p>Title</p>
            <p>Title</p>
            <p>Title</p>
            <p>Title</p>
            <p>Title</p>
            <p>Title</p>
        </div>
    )
}

export default Title;