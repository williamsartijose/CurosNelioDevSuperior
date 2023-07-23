package org.example.application;


import org.example.entities.Lesson;
import org.example.entities.Task;
import org.example.entities.Video;


import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Program {

    public static <Lesson> void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        List<Lesson> list = new ArrayList<>();

        System.out.print("Quantas aulas tem o curso? ");
        int n = sc.nextInt();
        System.out.println();

        for (int i = 1; i <= n; i++) {
            System.out.println("Dados da " + i + "a aula:");
            System.out.print("Conteúdo ou tarefa (c/t)? ");
            char type = sc.next().charAt(0);

            System.out.print("Título: ");
            sc.nextLine();
            String title = sc.nextLine();

            if (type == 'c') {
                System.out.print("URL do vídeo: ");
                String url = sc.nextLine();

                System.out.print("Duração em segundos: ");
                int seconds = sc.nextInt();

                list.add((Lesson) new Video(title, url, seconds));
            }
            else {
                System.out.print("Descrição: ");
                String description = sc.nextLine();

                System.out.print("Quantidade de questões: ");
                int questionCount = sc.nextInt();

                list.add((Lesson) new Task(title, description, questionCount));
            }
        }

        int sum = 0;

        for (Lesson l : list) {
            sum += l.duration();
        }

        System.out.println();
        System.out.println("DURAÇÃO TOTAL DO CURSO = " + sum + " segundos");

        sc.close();
    }

}