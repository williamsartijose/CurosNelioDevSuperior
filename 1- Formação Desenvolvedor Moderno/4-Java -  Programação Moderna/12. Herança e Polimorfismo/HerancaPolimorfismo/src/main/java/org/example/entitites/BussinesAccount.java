package org.example.entitites;

public class BussinesAccount  extends Account {


    private Double loanLimit;

    public BussinesAccount() {
        super();
    }

    public BussinesAccount(Integer number, String holder, Double balance, Double loanLimit) {
        super(number, holder, balance);
        this.loanLimit = loanLimit;
    }

    public Double getLoanLimit() {
        return loanLimit;
    }

    public void setLoanLimit(Double loanLimit) {
        this.loanLimit = loanLimit;
    }

    public void loan(double amount) {
        if (amount <= loanLimit) {
            balance += amount - 10.0;
        }
    }

    @Override // indicar que é uma sobreposição de metodos
    public void withdraw(double amount) { // operação de saque descontar
        super.withdraw(amount);
        balance -= 2.0;
    }
}
