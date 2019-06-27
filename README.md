This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## `设计思想`

react是组件式开发思想,所以组件拆分就显得至关重要,在components中的组件要继承父页面的数据,这里使用了类属性 defaultProps 来配置默认参数,为了实现组件的可复用性,同时降低代码维护的难度,要尽量少写有状态的组件

## `start和props总结`

state 的主要作用是用于组件保存,控制,修改自己的可变状态, state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。可以认为 state 是一个局部的、只能被组件自身控制的数据源. state 中状态可以通过 this.setState 方法进行更新,setState 会导致组件的重新渲染,

props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件.它是外部传进来的配置参数,组件内部无法控制也无法修改.除非外部组件主动传入新的 props,否则组件的 props 永远保持不变.

state 和 props 都可以决定组件的行为和显示形态. 一个组件的state中的数据可以通过props传给子组件,一个组件也可以使用外部传入的 props 来初始化自己的 state.但是它们的职责其实非常明晰分明：state 是让组件控制自己的状态,props 是让外部对组件自己进行配置.

## `通过给组件添加类属性 defaultProps 来配置默认参`

在子组件Search中设置Search.defaultProps={breadcrumb: []},此时可以通过父页面中的<Search breadcrumb={this.state.breadcrumb} />进行父传子,上面已经提到了,父组件的传参时,会传入子组件的props中,并且在子组件中不可修改.通过this.props渲染页面.

## `无状态组件`

没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。
