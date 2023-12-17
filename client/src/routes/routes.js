import React from 'react'
import Layout from '../components/Layout/Layout';
import PathConstants from "./pathConstants"
const SearchPuzzle = React.lazy(() => import('../components/SearchPuzzle/SearchPuzzle'))
const Home = React.lazy(() => import('../components/Home/Home'))
const Page404 = React.lazy(() => import('../components/Page404/Page404'))

const routes = [
    {
        // parent route component
        element: <Layout />,
        errorElement: <Page404 />,
        children: [
            { path: PathConstants.HOME, name: 'home', element: <Home /> },
            { path: PathConstants.WORD_PUZZLE, name: 'word-puzzle', element: <SearchPuzzle /> }
        ]
    }
  
]

export default routes