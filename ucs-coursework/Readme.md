# **SENTIMENT-ANALYSIS**
The dataset i have used is the IMDB 50K dataset. The [link](https://huggingface.co/datasets/SetFit/imdb) to the dataset.</br>
 Clearly the dataset has 50k samples with 25k positive reviews and 25k negative reviews.</br>
 I have used two Transformers **BERT** and **distillBERT**.

# **FILES**
1) The BERT_sentiment_analysis notebook has the code related to the use of the BERT transformer on the data.
2) The distillBERT_Sentiment_Analysis notebook has the code related to the use of the distillBERT transformer on the data.

# **OBSERVATIONS**
The distillBERT model i have used and trained is a little bit overfitting but still works good than the BERT model.</br>
Based on my observations the distillBERT model performed more good than the BERT model it may because of the following reasons. </br>
**Training Data** :- The data we are having is small when compared to the usual samples we use when we train LLM, so may be the distillBERT performed well.</br>
**Over Fitting**:- BERT, being a larger model, has the potential to memorize the training data more effectively, leading to overfitting in certain cases.</br>
While DistilBERT, with its reduced capacity, might generalize better to unseen data, upon vigorous training, the BERT model can potentially achieve very high accuracy, possibly even 100%. This is because BERT has a larger capacity and can memorize the training data more effectively. However, this increased capacity also makes BERT more prone to overfitting compared to DistilBERT, which has a simpler architecture and may not achieve the same level of overfitting even with intense training."