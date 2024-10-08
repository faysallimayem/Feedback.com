import './index.css';
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPages from './components/pages/AboutPages';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App(){
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm   />
                                    <FeedbackStats  />
                                    <FeedbackList   />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutPages />} />
                    </Routes>
                    <AboutIconLink/>            
                </div>
            </Router>
        </FeedbackProvider>
    );
    }

export default App