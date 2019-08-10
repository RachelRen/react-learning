let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}
// reducer
function stateChanger (state=appState, action) {
  
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
    return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
      // state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
      //state.title.color = action.color
      break
    default:
      return state
      break
  }
}

function dispatch (action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color
      break
    default:
      break
  }
}


function renderApp (newAppState, oldAppState = {}) {
  
  if (newAppState === oldAppState) return 
  console.log('render app...')
  renderTitle(newAppState.title, oldAppState.title )
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return 
  console.log('render title...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent) {
  if (newContent === oldContent) return 
  console.log('render content...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}

//renderApp(appState) // 首次渲染页面
//dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
//dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
//renderApp(appState) // 把新的数据渲染到页面上


function createStore(reducer){
  let state;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  };

  const getState = () => state;

  dispatch({})
  return {dispatch, getState, subscribe}
}


const store = createStore(stateChanger)
let oldState = store.getState();
store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState, oldState)
  oldState = newState;
})

//const newState = store.getState();

renderApp(store.getState())
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》 dispatch' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色



