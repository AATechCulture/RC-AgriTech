import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface AnalysisResults {
  infected: boolean;
  confidence: number;
  location: { x: number; y: number };
  recommendation: string;
}

const ImageAnalysis = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const analyze = async () => {
      setAnalyzing(true);
      try {
        // Simulate API call to Azure Computer Vision and OpenAI
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setResults({
          infected: true,
          confidence: 0.89,
          location: { x: 450, y: 300 },
          recommendation: "Apply organic fungicide treatment in the affected area. Monitor daily for the next week."
        });
        
        toast.success('Analysis completed successfully');
      } catch (error) {
        toast.error('Failed to analyze image');
      } finally {
        setAnalyzing(false);
      }
    };

    if (acceptedFiles.length > 0) {
      analyze();
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Image Analysis</h1>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-500'}`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your drone images here, or click to select files
          </p>
          <p className="text-xs text-gray-500">
            Supports: JPG, JPEG, PNG
          </p>
        </div>

        {analyzing && (
          <div className="mt-8 text-center">
            <Loader2 className="animate-spin h-8 w-8 text-green-600 mx-auto" />
            <p className="mt-2 text-sm text-gray-600">Analyzing image...</p>
          </div>
        )}

        {results && (
          <div className="mt-8 space-y-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=60"
                alt="Analyzed field"
                className="rounded-lg w-full"
              />
              <div
                className="absolute w-16 h-16 border-4 border-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: '60%', top: '40%' }}
              />
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800">
                Infection Detected
              </h3>
              <p className="mt-2 text-sm text-red-700">
                Confidence: {(results.confidence * 100).toFixed(1)}%
              </p>
              <div className="mt-4">
                <h4 className="font-medium text-red-800">Recommendation:</h4>
                <p className="mt-1 text-sm text-red-700">{results.recommendation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAnalysis;

// import React, { useCallback, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Upload, Loader2 } from 'lucide-react';
// import toast from 'react-hot-toast';
// import axios from 'axios';

// interface AnalysisResults {
//   infected: boolean;
//   recommendation: string;
// }

// const ImageAnalysis = () => {
//   const [analyzing, setAnalyzing] = useState(false);
//   const [results, setResults] = useState<AnalysisResults | null>(null);

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     const analyze = async () => {
//       setAnalyzing(true);
//       try {
//         const formData = new FormData();
//         formData.append('image', acceptedFiles[0]);

//         const response = await axios.post('http://localhost:5001/analyze-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });

//         const analysisText = response.data.analysis;
        
//         // Simple parsing of the analysis text
//         const infected = analysisText.toLowerCase().includes('infected') || analysisText.toLowerCase().includes('disease');
        
//         setResults({
//           infected: infected,
//           recommendation: analysisText
//         });
        
//         toast.success('Analysis completed successfully');
//       } catch (error) {
//         console.error('Error analyzing image:', error);
//         toast.error('Failed to analyze image');
//       } finally {
//         setAnalyzing(false);
//       }
//     };

//     if (acceptedFiles.length > 0) {
//       analyze();
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'image/*': ['.jpeg', '.jpg', '.png']
//     }
//   });

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-900">Image Analysis</h1>
//       </div>

//       <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
//         <div
//           {...getRootProps()}
//           className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
//             ${isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-500'}`}
//         >
//           <input {...getInputProps()} />
//           <Upload className="mx-auto h-12 w-12 text-gray-400" />
//           <p className="mt-2 text-sm text-gray-600">
//             Drag and drop your drone images here, or click to select files
//           </p>
//           <p className="text-xs text-gray-500">
//             Supports: JPG, JPEG, PNG
//           </p>
//         </div>

//         {analyzing && (
//           <div className="mt-8 text-center">
//             <Loader2 className="animate-spin h-8 w-8 text-green-600 mx-auto" />
//             <p className="mt-2 text-sm text-gray-600">Analyzing image...</p>
//           </div>
//         )}

//         {results && (
//           <div className="mt-8 space-y-6">
//             <div className={`bg-${results.infected ? 'red' : 'green'}-50 border border-${results.infected ? 'red' : 'green'}-200 rounded-lg p-6`}>
//               <h3 className={`text-lg font-semibold text-${results.infected ? 'red' : 'green'}-800`}>
//                 {results.infected ? 'Infection Detected' : 'No Infection Detected'}
//               </h3>
//               <div className="mt-4">
//                 <h4 className={`font-medium text-${results.infected ? 'red' : 'green'}-800`}>Analysis and Recommendation:</h4>
//                 <p className={`mt-1 text-sm text-${results.infected ? 'red' : 'green'}-700`}>{results.recommendation}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageAnalysis;