package org.example.application;

import org.example.entitites.Account;
import org.example.entitites.BussinesAccount;
import org.example.entitites.SavingsAccount;

public class Main {
    public static void main(String[] args) {

        Account acc1 = new Account(1001, "Alex", 1000.0);
        acc1.withdraw(200.0);
        System.out.println(acc1.getBalance());

        //teste da sobrebosiçaõa na classe SavingsAccount que nao pode desconta -5

        Account acc2 = new SavingsAccount(1002, "Maria",   1000.0, 0.01);
        acc2.withdraw(200.0);
        System.out.println(acc2.getBalance());
        //teste da SavingsAccount na classe SavingsAccount que nao pode desconta -5 + -2

        Account acc3 = new SavingsAccount(1003, "bob",   1000.0, 500.0);
        acc3.withdraw(200.0);
        System.out.println(acc3.getBalance());
    }
}