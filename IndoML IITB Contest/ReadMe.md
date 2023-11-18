# **PROJECT OVERVIEW**
This is a Repository of my Submissions in the Datathon named "**Indo ML Datathon**" Conducted by Indian Institute of Technology Bombay.</br>

The Competition website URL: https://indoml.in/</br>
The Datathon website URL: https://sites.google.com/view/datathon-indoml23</br>
The CodaLab Competition URL: https://codalab.lisn.upsaclay.fr/competitions/14977</br>

The Contest progressed in two phases</br>
1)Development Phase</br>
2)Final Phase</br>

# **PROBLEM STATEMENT**
The problem statement is about the intent recognition of the utterances collected and given in the data.

Development Phase:
You are given the dataset of AMAZONSCIENCE/MASSIVE in JSONL lines format. Then use the dataset to a prepare a model that get the highest evaluation metrics.

Final Phase:
You are given a surprise data that that you would train a model and use the model on the massive_test data. Here also your evaluation metrics are considered.

# **Files Description**

/Development_phase - Folder that contains all the files regarding my submission in Development Phase of the competition.</br>
/final_phase - Folder that contains all the files regarding my submission in Final phase of the competition.</br>
/IndoML_IITB_contest.ipynb - The Python Notebook that consists all the code regarding the Development of the model.</br>
/ReadMe.txt - The file that consists all the required Description of all the files.</br>
/Development_Phase_result.png - The screenshot of the LeaderBoard position i have scored in the Development_Phase of the competition.</br>
/Final_Phase_result.png - The screenshot of the LeaderBoard position i have scored in the Final_Phase of the competition.</br>

/Development_Phase/public_data.zip - This files contains all the data that is used in the Development_Phase</br>
/Development_Phase/massive_test_rahul_2.zip - This zip file contains my best submission for the Development_Phase. it basically contains the .predict file</br1>
/Development_Phase/massive_test_rahul.predict - The .predict files contains the intent_id and the intent_predicted</br>
/Development_Phase/output.csv - The csv file contains the submission file that has intent_id and the intent_predicted.</br>
/Development_Phase/result.csv - The csv file contains the locale(name), id(no of the id), intent that is predicted.</br>
/Development_Phase/csvjson.json - The json file that is generated after converting the output.csv file to JSON file</br>
/Development_Phase/modified_data.json - The json file that is beautified in the required format given by the organizers.</br>

/final_phase/surprise_data.zip - The zip that contains the training data for the final_phase of the competition.</br>
/final_phase/massive_test_phase2_data.zip - The zip contains the data is used for the predicting the labels for the final_phase of the competition.</br>
/final_phase/massive_test_rahul_7.zip - The zip file contains my submission for the final_phase. It basically contains the .predict file that i have used in the Final_Phase submission.</br>
/final_phase/massive_test_rahul_7.predict - The .predict file contains the intent_id and the intent_predicted.</br>
/final_phase/modified_data - The json file contains the intent_id and the intent_predicted in the required format for the submission.</br>

**Other details are available on the competition site**

The model that i have used in the competition are available in the Hugging face website </br>
The link for the model used in the development phase: https://huggingface.co/cartesinus/xlm-r-base-amazon-massive-slot</br>
The link for the model used in the final phase: https://huggingface.co/cartesinus/xlm-r-base-amazon-massive-domain</br>

**Development_phase_Leaderboard_position:**
![Development_phase_result](https://github.com/Reyansh4/NLP_NLU/assets/102613781/7ce6304f-290b-4d97-b169-bd38f27c45fc)

**Final_phase_Leaderboard_position:**
![final_phase_result](https://github.com/Reyansh4/NLP_NLU/assets/102613781/004e6add-4e76-41c2-b38f-657adc32c59a)
