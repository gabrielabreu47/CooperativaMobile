using CoopApp.Services.Accounts;
using CoopApp.Services.Contacts;
using CoopApp.Services.Discounts;
using CoopApp.Services.Faqs;
using CoopApp.Services.Investments;
using CoopApp.Services.Loans;
using CoopApp.Services.Movements;
using CoopApp.Services.News;
using CoopApp.Services.User;
using CoopApp.Services.Videos;

namespace CoopApp.Services
{
    public static class ServiceRegistry
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IContactService, ContactService>();
            services.AddTransient<IDiscountService, DiscountService>();
            services.AddTransient<IFaqService, FaqService>();
            services.AddTransient<IInvestmentService, InvestmentService>();
            services.AddTransient<ILoanService, LoanService>();
            services.AddTransient<IMovementService, MovementService>();
            services.AddTransient<INewsService, NewService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IVideoService, VideoService>();

            return services;
        }
    }
}
