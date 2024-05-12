// Copyright (c) 2021 PaddlePaddle Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#pragma once

#include "onnx.h"
#include "opencv2/core.hpp"
#include "opencv2/imgcodecs.hpp"
#include "opencv2/imgproc.hpp"
#include "shared.h"
#include "utils.h"

using RecognitionResultData = std::pair<std::string, float>;

struct RecognitionResult {
  RecognitionResultData data {};
  ModelPerformance performance {};
};

class RecognitionPredictor {
public:
  explicit RecognitionPredictor(Options &options, const int cpuThreadNum, const std::string &cpuPowerMode);

  RecognitionResult Predict(const cv::Mat &rgbaImage, std::vector<std::string> charactor_dict);

private:
  Options m_options {};
  Onnx m_onnx;

  ImageRaw Preprocess(const cv::Mat &rgbaImage);

  RecognitionResultData Postprocess(ModelOutput &model_output, const cv::Mat &rgbaImage,
                                    std::vector<std::string> charactor_dict);
};
