package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Address;
import entities.Department;
import entities.Employee;

public class Program
{

    public static void main(
        String[] args )
    {

        Locale.setDefault( Locale.US );
         Scanner sc = new Scanner( System.in );

         System.out.print("Nome do departamento: ");
         String department = sc.next();
         System.out.print("Dia do pagamento: ");
         int payDay = sc.nextInt();

         System.out.print("Email: ");
         String email = sc.next();
         System.out.print("Telefone: ");
         String tel = sc.next();

         // Instancias classe Address
         Address address = new Address(email, tel);

         // Instancias classe Departamento
         Department dept = new Department(department, payDay, address);

         System.out.print("Quantos funcionários tem o departamento? ");
         int n = sc.nextInt();

         // List<Employee> list = new ArrayList<>();

         for (int i = 0; i < n; i++) {
             System.out.printf("Dados do funcionário " + (i + 1) + ":%n");
             System.out.print("Nome: ");
             String name = sc.next();
             sc.nextLine();
             System.out.print("Salário: ");
             Double salary = sc.nextDouble();

             // Inserir na lista
             Employee employees = new Employee(name, salary);
             dept.addEmployee(employees);
         }

         showReport(dept);

         sc.close();
     }

     // MOSTRAR NA TELA OS DADOS DO RELATÓRIO
     private static void showReport(Department dept) {

         System.out.println("\nFOLHA DE PAGAMENTO:");
         System.out.printf("Departamento %s = R$ %.2f\n", dept.getName(), dept.payroll());
         System.out.printf("Pagamento realizado no dia %d\n", dept.getPayDay());
         System.out.println("FUNCIONÁRIOS:");

         for (Employee emp : dept.employee()) {
             System.out.println(emp.getName());
         }

         System.out.printf("Para dúvidas favor entrar em contato: %s", dept.getAddress().getEmail());
     }
 }