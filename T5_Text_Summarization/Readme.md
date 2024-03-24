# **INTRODUCTION**

This is a repository that contains the Summarization task of the BillSum dataset using the T5-base model. </br>

Code Credits:- https://huggingface.co/docs/transformers/en/tasks/summarization </br>

The main goal of this repository is to make familiar with the Text Summarization task and pushing it to the Hugging Face </br>

Hugging Face Repo Link:- https://huggingface.co/Reyansh4/T5_on_Billsum </br>

**METHOD TO PUSH MODEL TO HUGGING FACE HUB**

1)Create an account in Hugging Face and in the Settings section create a Token with write permissions</br>
2)"pip install huggingface_hub" use this command to install the huggingface hub.</br>
3)"!huggingface-cli login" use this command to login in the Token section paste the token that you have created in the HuggingFace Settings.</br>
4)Use the "trainer.push_to_hub()" command to push to hub with name in this format ("Account_Name/name_of_the_project")</br>
5)Similarly push the tokenizer to hub using the same format using "tokenizer.push_to_hub()".</br>

HAPPY CODING...!!!!
