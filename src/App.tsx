import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Progress } from './components/ui/progress'
import { Switch } from './components/ui/switch'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { Globe, RefreshCw, Play, Pause, Settings, Clock, Skull, Flag } from 'lucide-react'
import { useLanguages, languageCodes, languageNames } from './localization/i18n'


function App() {
  const [languageCode, setLanguageCode] = useState<string>('en')
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)
  const [inputText, setInputText] = useState<string>('')
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [wpm, setWpm] = useState<number>(0)
  const [accuracy, setAccuracy] = useState<number>(100)
  const [progress, setProgress] = useState<number>(0)
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const [mistakes, setMistakes] = useState<number>(0)
  const [totalMistakes, setTotalMistakes] = useState<number>(0)
  const [suddenDeath, setSuddenDeath] = useState<boolean>(false)
  const [gameOverEnabled, setGameOverEnabled] = useState<boolean>(true)
  const [timeLimit, setTimeLimit] = useState<number>(60) // Default 60 seconds
  const [sessionStarted, setSessionStarted] = useState<boolean>(false)
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<number | null>(null)
  
  const { languages, isLoading } = useLanguages()
  
  const currentLanguage = languages[languageCode]
  const currentText = currentLanguage?.texts[currentTextIndex] || ''

  useEffect(() => {
    if (currentText && inputText) {
      const progressValue = (inputText.length / currentText.length) * 100
      setProgress(progressValue)
    } else {
      setProgress(0)
    }
  }, [inputText, currentText])

  useEffect(() => {
    if (isActive && startTime) {
      timerRef.current = window.setInterval(() => {
        const now = Date.now()
        const newElapsedTime = now - startTime
        setElapsedTime(newElapsedTime)
        
        if (timeLimit > 0 && newElapsedTime >= timeLimit * 1000 && gameOverEnabled) {
          setIsActive(false)
          setGameOver(true)
          if (timerRef.current) {
            clearInterval(timerRef.current)
          }
        }
      }, 100)
    } else if (!isActive && timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isActive, startTime, timeLimit, gameOverEnabled])

  useEffect(() => {
    if (startTime && elapsedTime > 0) {
      const minutes = elapsedTime / 60000
      const correctChars = Math.max(0, inputText.length - totalMistakes)
      const words = correctChars / 5
      const calculatedWpm = minutes > 0 ? Math.round(words / minutes) : 0
      setWpm(calculatedWpm)

      if (inputText.length > 0) {
        const accuracyValue = Math.max(0, 100 - (totalMistakes / inputText.length) * 100)
        setAccuracy(Math.round(accuracyValue))
      }
    }
  }, [elapsedTime, inputText, startTime, totalMistakes])

  const startSession = () => {
    resetExercise()
    setSessionStarted(true)
    setGameOver(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!sessionStarted || gameOver) return;
    
    const value = e.target.value
    
    if (!startTime && value.length === 1) {
      setStartTime(Date.now())
      setIsActive(true)
    }

    let mistakeCount = 0
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== currentText[i]) {
        mistakeCount++
      }
    }
    
    if (suddenDeath && mistakeCount > mistakes) {
      setMistakes(mistakeCount)
      setTotalMistakes(totalMistakes + (mistakeCount - mistakes))
      setInputText(value)
      setIsActive(false)
      setGameOver(true)
      return;
    }
    
    setMistakes(mistakeCount)
    setTotalMistakes(totalMistakes + Math.max(0, mistakeCount - mistakes))
    setInputText(value)

    if (value === currentText) {
      setEndTime(Date.now())
      setIsActive(false)
    }
  }

  const resetExercise = useCallback(() => {
    setInputText('')
    setStartTime(null)
    setEndTime(null)
    setIsActive(false)
    setWpm(0)
    setAccuracy(100)
    setProgress(0)
    setElapsedTime(0)
    setMistakes(0)
    setTotalMistakes(0)
    setGameOver(false)
    setSessionStarted(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const changeText = useCallback(() => {
    const nextIndex = (currentTextIndex + 1) % (currentLanguage?.texts.length || 1)
    setCurrentTextIndex(nextIndex)
    resetExercise()
  }, [currentTextIndex, currentLanguage, resetExercise])

  const handleLanguageChange = (value: string) => {
    setLanguageCode(value)
    setCurrentTextIndex(0)
    resetExercise()
  }

  const toggleTimer = () => {
    if (isActive) {
      setIsActive(false)
    } else if (inputText.length > 0 && !endTime) {
      setIsActive(true)
      if (!startTime) {
        setStartTime(Date.now())
      }
    }
  }

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const renderText = () => {
    return currentText.split('').map((char, index) => {
      let className = 'text-gray-700'
      
      if (index < inputText.length) {
        className = inputText[index] === char ? 'text-green-600 font-medium' : 'text-red-600 font-medium'
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      )
    })
  }

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Typing Practice</h1>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleSettings}
              className="flex items-center gap-1"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-500" />
              <Select value={languageCode} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={isLoading ? "Loading..." : "Select language"} />
                </SelectTrigger>
                <SelectContent>
                  {isLoading ? (
                    <SelectItem value="loading">Loading languages...</SelectItem>
                  ) : (
                    languageCodes.map((code) => (
                      <SelectItem key={code} value={code}>
                        {languages[code]?.name || languageNames[code]}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>

        {showSettings && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="sudden-death" 
                    checked={suddenDeath}
                    onCheckedChange={setSuddenDeath}
                  />
                  <Label htmlFor="sudden-death" className="flex items-center gap-2">
                    <Skull className="h-4 w-4" />
                    Sudden Death Mode
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="game-over" 
                    checked={gameOverEnabled}
                    onCheckedChange={setGameOverEnabled}
                  />
                  <Label htmlFor="game-over" className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Game Over Conditions
                  </Label>
                </div>
                
                <div className="flex flex-col space-y-2 md:col-span-2">
                  <Label htmlFor="time-limit" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Time Limit (seconds)
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input 
                      id="time-limit" 
                      type="number" 
                      min="0" 
                      max="300"
                      value={timeLimit}
                      onChange={(e) => setTimeLimit(parseInt(e.target.value) || 0)}
                      className="w-24"
                    />
                    <span className="text-sm text-gray-500">
                      {timeLimit === 0 ? 'No time limit' : `${timeLimit} seconds`}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Text to Type</span>
              <Button variant="outline" size="sm" onClick={changeText}>
                <RefreshCw className="h-4 w-4 mr-2" />
                New Text
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-lg leading-relaxed p-4 bg-gray-100 rounded-md min-h-[100px] flex items-center justify-center">
                Loading language data...
              </div>
            ) : (
              <div className="text-lg leading-relaxed p-4 bg-gray-100 rounded-md min-h-[100px]">
                {renderText()}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4">
              {!sessionStarted && !gameOver ? (
                <Button 
                  onClick={startSession} 
                  className="w-full py-6 text-lg"
                  size="lg"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start
                </Button>
              ) : (
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    className={`w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      mistakes > 0 ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Start typing here..."
                    disabled={!!endTime || gameOver}
                    autoFocus
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={toggleTimer}
                    disabled={inputText.length === 0 || !!endTime || gameOver}
                  >
                    {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                </div>
              )}
              <Progress value={progress} className="h-2" />
              
              {gameOver && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
                  <p className="text-red-600 font-medium">Game Over!</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {suddenDeath && mistakes > 0 ? 'Sudden death mode: You made a mistake!' : 
                     timeLimit > 0 && elapsedTime >= timeLimit * 1000 ? 'Time limit reached!' : 
                     'Game over'}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Speed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{wpm} <span className="text-sm font-normal text-gray-500">WPM</span></p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{accuracy}%</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{formatTime(elapsedTime)}</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={resetExercise}>
            Reset
          </Button>
          {(endTime || gameOver) && (
            <Button onClick={changeText}>
              Next Exercise
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
