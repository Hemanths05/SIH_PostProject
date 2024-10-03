const schemesData = [
    { 
        name: 'Post Office Savings Account(SB)', 
        description: 'The Post Office Savings Account (SB) is a secure savings option offered by the India Post, designed to encourage saving among individuals and families. It provides competitive interest rates, government backing, and is accessible through the extensive network of post offices across India.',
        uses: [
            "Earns interest at 4.0% per annum, making it an attractive option for saving money.",
            "Provides a safe place to save money with guaranteed returns, supported by the government."
        ],
        procedure: [
            "Individuals can open a single account, joint accounts (maximum two), or guardians can open accounts for minors or persons of unsound mind.",
            "Minimum initial deposit of INR 500."
        ]
    },
    
    { 
        name: '5-Year Post Office Recurring Deposit Account (RD)', 
        description: 'The 5-Year Post Office Recurring Deposit Account is a savings scheme that encourages regular savings through monthly deposits. It offers a competitive interest rate of 6.7% per annum, compounded quarterly, and allows individuals to make fixed monthly deposits over a period of five years. This account is ideal for those looking to cultivate a disciplined saving habit while earning interest on their deposits.',
        uses: [
            "Provides a structured savings plan with a fixed monthly deposit, promoting financial discipline.",
            "Earns interest at 6.7% per annum, compounding quarterly, which enhances savings over time.",
            "After making at least 12 monthly deposits, account holders can avail of a loan facility up to 50% of the account balance.",
            "Minimum monthly deposit of INR 100, with no maximum limit, allows for customization based on individual financial capabilities."
        ],
        procedure: [
            "A minimum deposit of INR 100 is required per month, with subsequent deposits in multiples of INR 10.",
            "Open the account with an initial deposit either by cash or cheque",
            "Complete a prescribed application form and provide necessary KYC documents"
        ]
    },
    
    { 
        name: 'National Savings Time Deposit Account (TD)', 
        description: 'The National Savings Time Deposit Account (TD) is a savings instrument designed to encourage long-term savings with the flexibility of different tenures. It offers attractive interest rates ranging from 6.9% to 7.5% per annum, depending on the duration of the deposit. This account is ideal for individuals looking for a safe investment option with guaranteed returns.',
        uses: [
            "Ideal for individuals who want to save money over a fixed period (1, 2, 3, or 5 years) and earn interest.",
            "Provides competitive interest rates that are higher than regular savings accounts, thus enhancing savings.",
            "The investment in the 5-year TD qualifies for tax deductions under Section 80C of the Income Tax Act, making it a tax-efficient investment."
        ],
        procedure: [
            "Individuals eligible to open an account include: single adult , Joint accounts (up to three adults), Guardians on behalf of minors or persons of unsound mind, Minors above 10 years in their own name.",
            "The account can be opened with a minimum deposit of INR 1000 and in multiples of INR 100. There is no maximum limit for investment.",
            "Complete a prescribed application form and submit necessary KYC documents"
        ]
    },
    
    { 
        name: 'National Savings Monthly Income Account(MIS)', 
        description: 'The National Savings Monthly Income Scheme Account (MIS) is a popular savings instrument aimed at individuals looking for a steady monthly income. With an attractive interest rate of 7.4% per annum payable monthly, this account is ideal for retirees or anyone seeking regular income from their savings.',
        uses: [
            "The MIS account is primarily designed for individuals seeking a fixed monthly income, making it suitable for retirees or those who need supplemental income",
            "While the interest earned is taxable, the account allows for effective financial planning and cash flow management.",
            "Individuals can invest in multiples of INR 1,000 with a maximum investment limit of INR 9 lakh in single accounts and INR 15 lakh in joint accounts."
        ],
        procedure: [
            "Individuals eligible to open an account include: A single adult,Joint accounts (up to three adults) , Guardians on behalf of minors or persons of unsound mind , Minors above 10 years in their own name.",
            "The account can be opened with a minimum deposit of INR 1,000 and in multiples of INR 1,000.",
            "Complete a prescribed application form and provide necessary KYC documents"
        ]
    },
    
    { 
        name: 'Senior Citizens Savings Scheme Account(SCSS)', 
        description: 'The Senior Citizen Savings Scheme (SCSS) is a government-backed savings instrument designed specifically for senior citizens to provide them with a steady income in their post-retirement years. With a generous interest rate of 8.2% per annum, payable quarterly, it offers a reliable and secure investment option for individuals above the age of 60. The scheme also comes with tax-saving benefits under Section 80C of the Income Tax Act.',
        uses: [
            "SCSS provides a safe and fixed return for senior citizens, making it a reliable income source for retirees.",
            "Individuals who have retired from civil or defense services can invest their retirement benefits within one month of receiving them.",
            "The interest is paid quarterly, making it a convenient option for those who need regular income at predictable intervals."
        ],
        procedure: [
            "The account can be opened by individuals who meet the following criteria: Above 60 years of age , Retired Civilian Employees aged between 55 and 60 years (provided the investment is made within one month of retirement) , Retired Defense Employees aged between 50 and 60 years (investment must be made within one month of receiving retirement benefits).",
            "The account requires a minimum deposit of INR 1,000 and allows deposits in multiples of INR 1,000.",
            "To open the account, the individual must submit the prescribed application form along with KYC documents such as Aadhaar and PAN cards."
        ]
    },
    
    { 
        name: 'Public Provident Fund Account(PPF )', 
        description: 'The Public Provident Fund (PPF) is a government-backed savings scheme that provides a secure investment avenue with a fixed interest rate of 7.1% per annum (as of 01.01.2024), compounded yearly. It has a tenure of 15 years, and individuals can invest between a minimum of INR 500 and a maximum of INR 1.5 lakh in a financial year. The scheme encourages long-term savings while offering tax benefits under Section 80C of the Income Tax Act, making it an attractive option for salaried individuals, professionals, and anyone seeking a low-risk investment.',
        uses: [
            "The PPF scheme is ideal for individuals who want to build a long-term savings corpus for future goals like children’s education, retirement, or purchasing a house.",
            "The account holder can avail of a loan facility against the balance in the account after the expiry of one year but before the completion of five years from the date of account opening.",
            "The account allows partial withdrawals from the 7th year onwards (after 5 years of account operation), providing some liquidity during the tenure."
        ],
        procedure: [
            "A single adult resident Indian or a guardian on behalf of a minor or a person of unsound mind can open a PPF account.",
            "The account can be opened by visiting a post office or a designated bank branch.",
            "Deposits can be made in a lump sum or in installments, with a minimum deposit of INR 500 and a maximum of INR 1.5 lakh per financial year."
        ]
    },
    
    { 
        name: 'Sukanya Samriddhi Account(SSA)​', 
        description: 'The Sukanya Samriddhi Account (SSA) is a small savings scheme exclusively for the benefit of a girl child. The scheme offers an interest rate of 8.2% per annum (effective from 01-01-2024), which is compounded yearly. The account can be opened by the guardian of a girl child below 10 years of age, with deposits ranging from a minimum of INR 250 to a maximum of INR 1.5 lakh per financial year. The account matures after 21 years from the date of opening or when the girl child gets married after the age of 18, whichever comes first.',
        uses: [
            "Sukanya Samriddhi Yojana provides a secure savings option for future expenses related to education, marriage, or other financial needs of the girl child.",
            "Deposits made under the SSA qualify for tax deductions under Section 80C of the Income Tax Act. The interest earned and maturity proceeds are also tax-free, providing triple tax exemption (EEE).",
            "The SSA offers a higher interest rate compared to other government-backed savings schemes, ensuring better returns over the long term.",
            "Withdrawals of up to 50% of the balance can be made for higher education or marriage expenses after the girl reaches 18 years or passes 10th grade.",
            "The account allows partial withdrawals when the girl child reaches 18 years or passes 10th standard, whichever comes first."
        ],
        procedure: [
            "The account can be opened by a guardian in the name of a girl child below the age of 10 years.",
            "A minimum of INR 250 is required to open the account, and deposits must be made each year with a minimum of INR 250 to a maximum of INR 1.5 lakh per financial year."
        ]
    },
    
    { 
        name: 'Kisan Vikas Patra(KVP)', 
        description: 'Kisan Vikas Patra is a fixed-income investment scheme that offers a 7.5% interest rate compounded annually (effective from 01-01-2024). The scheme doubles the initial investment in 115 months (9 years and 7 months). It has a minimum investment requirement of INR 1,000, and deposits can be made in multiples of INR 100, with no upper limit on investment. KVP provides guaranteed returns, and the interest earned is fully taxable.',
        uses: [
            "The key feature of KVP is that the invested amount will double in a fixed tenure, which is currently set at 9 years and 7 months. This makes it a suitable option for those seeking low-risk, long-term investment options.",
            "KVP is suited for financial goals that require a longer time horizon, such as children’s education, retirement planning, or marriage expenses."
        ],
        procedure: [
            "The following individuals can open a KVP account: Single adult , Joint account with up to 3 adults , Guardian on behalf of a minor or a person of unsound mind , A minor above 10 years can open the account in his/her own name ,",
            "The minimum deposit required to open a KVP account is INR 1,000, and investments can be made in multiples of INR 100."
        ]
    },
    
    { 
        name: 'Mahila Samman Savings Certificate', 
        description: 'The Mahila Samman Savings Certificate (MSSC) is a fixed-income investment scheme that offers an interest rate of 7.5% per annum, compounded quarterly. It can be opened by any woman for herself or by a guardian on behalf of a minor girl. The scheme has a minimum investment requirement of INR 1,000 and allows deposits in multiples of INR 100, with a maximum deposit limit of INR 2 lakh across all accounts held by an account holder. The scheme matures in 2 years, providing a moderate-term investment opportunit',
        uses: [
            "This scheme is specifically designed for women and girls to encourage savings with attractive returns.",
            "With a maturity period of 2 years, the Mahila Samman Savings Certificate is ideal for women looking for short-term investments with decent returns and low risk.",
            "The scheme allows 40% withdrawal of the eligible balance after one year, making it a flexible savings option for women who may need to access part of their funds before maturity"
        ],
        procedure: [
            "The Mahila Samman Savings Certificate can be opened: By any woman for herself , By a guardian on behalf of a minor girl.",
            "The minimum deposit is INR 1,000.",
            "To open an account, the applicant must visit the nearest Post Office with the required documents."
        ]
    }
];

export default schemesData;