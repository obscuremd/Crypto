
// Disclosure Content
const disclosureContent = `
We offer a range of structured investment plans designed to cater to diverse financial goals and investment capacities. Each plan is tailored to provide competitive returns, with daily interest accruals and referral commission opportunities. Below are the details of our available plans:

1. First Plan
  
  - Minimum Deposit: $200

  - Maximum Deposit: $9,999

  - Investment Tenure: 6 days

  - Daily Interest Rate: 2.5%

  - Referral Commission: 5%

Ideal for entry-level investors, this plan offers a short-term commitment with consistent daily returns and referral earning potential.

2. Economy Plan

-Minimum Deposit: $10,000

-Maximum Deposit: $29,999

-Investment Tenure: 10 days

-Daily Interest Rate: 3%

-Referral Commission: 5%

Designed for moderate investors, this plan provides enhanced daily returns and a slightly longer tenure to maximize earnings.

3. Business Plan

-Minimum Deposit: $30,000

-Maximum Deposit: $49,999

-Investment Tenure: 15 days

-Daily Interest Rate: 4%

-Referral Commission: 5%

Tailored for serious investors, this plan offers higher daily interest rates and a mid-term investment horizon for optimal growth.

4. Universal Plan

-Minimum Deposit: $50,000 and above

-Investment Tenure: 30 days

-Daily Interest Rate: 4.7%

-Referral Commission: 5%

Our premium plan is designed for high-net-worth individuals and institutional investors, offering the highest daily returns and a long-term investment period for substantial wealth accumulation.

Key Features Across All Plans:

-Daily Interest: Accrued and compounded for the duration of the investment.

-Referral Commissions: Earn 5% on deposits made by referred clients.

-Flexible Tenures: Plans are structured to suit varying investment horizons.

-Transparent Terms: Clear and straightforward terms for all investment plans.

For further details or to begin your investment journey, please contact our support team or visit our platform to select the plan that aligns with your financial objectives.




`;

const image = "https://plus.unsplash.com/premium_vector-1711987884895-4e90ec0b4da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D";

const Trade = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="hero h-[40vh] rounded-2xl flex items-center pt-20"
      >
        <p className="text-4xl font-extrabold text-white">How would you like to Invest</p>
      </div>

      {/* Main Content */}
      <div className="mt-[-50px] px-5 flex flex-col gap-3">
        {/* Trade Options */}
        <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">Quick Trade</div>
          <div className="collapse-content">
            <p>Buy and sell stocks and ETFs using basic market/limit orders.</p>
          </div>
        </div>

        <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
          <div className="collapse-title text-xl font-medium">Full Trade</div>
          <div className="collapse-content">
            <p>All order types, including short sales, options, mutual funds, and extended hours trading.</p>
          </div>
        </div>

        {/* Disclosure Agreement */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Investment Plans</h2>
          <p className="whitespace-pre-wrap">{disclosureContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Trade;
