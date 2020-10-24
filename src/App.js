import React from 'react'
import styles from './app.module.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DragAndDropPage } from './containers/draganddrop/DragAndDropPage'
import { MainPage } from './containers/main/MainPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import WorkspacesPage from './pages/workspaces'

function App() {
    return (
        <BrowserRouter>
            <DndProvider backend={HTML5Backend}>
                <div className={styles.app}>
                    <Switch>
                        <Route path={process.env.PUBLIC_URL + "/workspaces"} component={WorkspacesPage} exact/>
                        <Route path={process.env.PUBLIC_URL + "/main"} component={MainPage}  exact/>
                        <Route
                            path={process.env.PUBLIC_URL + "/drag-and-drop"}
                            component={DragAndDropPage}
                            exact
                        />
                        <Route
                            component={WorkspacesPage}
                        />
                    </Switch>
                </div>
            </DndProvider>
        </BrowserRouter>
    )
}


export default App
