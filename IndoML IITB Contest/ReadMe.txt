This is a Repository of my Submissions in the Datathon named "Indo ML Datathon" Conducted by Indian Institute of Technology Bombay.

The Competition website URL: https://indoml.in/
The Datathon website URL: https://sites.google.com/view/datathon-indoml23
The CodaLab Competition URL: https://codalab.lisn.upsaclay.fr/competitions/14977

The Contest progressed in two phases
1)Development_Phase
2)Final_Phase

PROBLEM STATEMENT
The problem statement is about the intent recognition of the utterances collected and given in the data.

Development Phase:
You are given the dataset of AMAZONSCIENCE/MASSIVE in JSONL lines format. Then use the dataset to a prepare a model that get the highest evaluation metrics.

Final Phase:
You are given a surprise data that that you would train a model and use the model on the massive_test data. Here also your evaluation metrics are considered.

Files Description:

/Development_phase - Folder that contains all the files regarding my submission in Development Phase of the competition.
/final_phase - Folder that contains all the files regarding my submission in Final phase of the competition.
/IndoML_IITB_contest.ipynb - The Python Notebook that consists all the code regarding the Development of the model.
/ReadMe.txt - The file that consists all the required Description of all the files.
/Development_Phase_result.png - The screenshot of the LeaderBoard position i have scored in the Development_Phase of the competition.
/Final_Phase_result.png - The screenshot of the LeaderBoard position i have scored in the Final_Phase of the competition.

/Development_Phase/public_data.zip - This files contains all the data that is used in the Development_Phase
/Development_Phase/massive_test_rahul_2.zip - This zip file contains my best submission for the Development_Phase. it basically contains the .predict file
/Development_Phase/massive_test_rahul.predict - The .predict files contains the intent_id and the intent_predicted
/Development_Phase/output.csv - The csv file contains the submission file that has intent_id and the intent_predicted.
/Development_Phase/result.csv - The csv file contains the locale(name), id(no of the id), intent that is predicted.
/Development_Phase/csvjson.json - The json file that is generated after converting the output.csv file to JSON file
/Development_Phase/modified_data.json - The json file that is beautified in the required format given by the organizers.

/final_phase/surprise_data.zip - The zip that contains the training data for the final_phase of the competition
/final_phase/massive_test_phase2_data.zip - The zip contains the data is used for the predicting the labels for the final_phase of the competition.
/final_phase/massive_test_rahul_7.zip - The zip file contains my submission for the final_phase. It basically contains the .predict file that i have used in the Final_Phase submission.
/final_phase/massive_test_rahul_7.predict - The .predict file contains the intent_id and the intent_predicted.
/final_phase/modified_data - The json file contains the intent_id and the intent_predicted in the required format for the submission.

**Other details are available on the competition site**

The model that i have used in the competition is available in the Hugging face website 
The link for the model used in the development phase: https://huggingface.co/cartesinus/xlm-r-base-amazon-massive-slot
The link for the model used in the final phase: https://huggingface.co/cartesinus/xlm-r-base-amazon-massive-domain
