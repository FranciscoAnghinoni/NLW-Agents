import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateQuestionResponse } from "./types/create-question-response";
import type { CreateQuestionsRequest } from "./types/create-questions-request";

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionsRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();

      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-questions", roomId] });
    },
  });
}
