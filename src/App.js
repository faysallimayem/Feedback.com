import { useState } from 'react';
import './index.css';
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid';
import AboutPages from './components/pages/AboutPages';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
 


function App(){
    const [feedback,setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete? ')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    {/* Home Route */}
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            </>
                        }
                    />
                    <Route path="/about" element={<AboutPages />} />
                </Routes>
            </div>
        </Router>
    );
    }

export default App