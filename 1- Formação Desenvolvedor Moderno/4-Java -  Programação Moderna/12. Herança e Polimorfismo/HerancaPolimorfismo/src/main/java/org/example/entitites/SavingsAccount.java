package org.example.entitites;

public class SavingsAccount extends Account {

    private Double interestRate;

    public SavingsAccount() {
        super();
    }

    public SavingsAccount(Integer number, String holder, Double balance, Double interestRate) {
        super(number, holder, balance);
        this.interestRate = interestRate;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(Double interestRate) {
        this.interestRate = interestRate;
    }
    
    
    public void updateBalance() {
         balance += balance * interestRate;
    }

    @Override // indicar que é uma sobreposição de metodos
    public void  withdraw(double amount){ // operação de saque descontar
        balance -= amount;
    }
}
