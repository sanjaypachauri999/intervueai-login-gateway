import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Monitor, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Play,
  Pause
} from 'lucide-react';

const InterviewInterface = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);

  const questions = [
    "Tell me about yourself and your background in software development.",
    "Describe a challenging project you've worked on and how you overcame obstacles.",
    "How do you stay updated with the latest technology trends?",
    "Explain your approach to debugging complex issues.",
    "Where do you see yourself in the next 5 years?"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Interview Session</h1>
              <p className="text-gray-600">Senior React Developer Position</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-lg font-mono">
                <Clock className="h-5 w-5 mr-2 text-ai-blue" />
                {formatTime(timeRemaining)}
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                isRecording ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {isRecording ? 'Recording' : 'Paused'}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Video Feed</span>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant={audioEnabled ? "default" : "destructive"}
                      onClick={() => setAudioEnabled(!audioEnabled)}
                    >
                      {audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant={videoEnabled ? "default" : "destructive"}
                      onClick={() => setVideoEnabled(!videoEnabled)}
                    >
                      {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant={screenSharing ? "default" : "outline"}
                      onClick={() => setScreenSharing(!screenSharing)}
                    >
                      <Monitor className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {!videoEnabled && (
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      <VideoOff className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Question Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <Button
                    onClick={toggleRecording}
                    variant={isRecording ? "destructive" : "default"}
                    size="sm"
                  >
                    {isRecording ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isRecording ? 'Pause' : 'Start'} Recording
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={progress} className="w-full" />
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {questions[currentQuestion]}
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button
                    onClick={previousQuestion}
                    disabled={currentQuestion === 0}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={nextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                  >
                    Next Question
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Camera</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Microphone</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Internet</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Recording</span>
                  {isRecording ? 
                    <CheckCircle className="h-4 w-4 text-green-500" /> :
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  }
                </div>
              </CardContent>
            </Card>

            {/* Interview Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Speak clearly and maintain eye contact</p>
                <p>• Take your time to think before answering</p>
                <p>• Ask for clarification if needed</p>
                <p>• Stay within the time limit for each question</p>
                <p>• Remain professional throughout</p>
              </CardContent>
            </Card>

            {/* Emergency Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full">
                  Technical Support
                </Button>
                <Button variant="destructive" className="w-full">
                  End Interview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewInterface;