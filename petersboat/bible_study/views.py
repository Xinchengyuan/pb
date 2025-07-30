from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.conf import settings
import openai
import json

client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)

# Create your views here.

@csrf_exempt
def ask_gpt_view(request):
    if request.method == "POST":
        import json
        body = json.loads(request.body)
        verse = body.get("verse", "")
        verseContent = body.get("verseContent", "")
        question = body.get("question", "")

        full_prompt = f"""You are a Chinese Bible study assistant. Please answer the user's question based on the following scriptures.Verse：{verse} - {verseContent} User's question：{question}"""

        try:
            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": "You are a gentle, deep and Bible-centered Chinese Bible tutor."},
                    {"role": "user", "content": full_prompt}
                ],
                temperature=0.7
            )

            #extract response message content
            content = response.choices[0].message.content
            return JsonResponse({ 
                "choices": [
                    {
                        "message": {
                             "content": content
                         }
                    }
                 ]                        
            })

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    
def biblestudy_view(request):
    return render(request, 'bible_study/bs.html')