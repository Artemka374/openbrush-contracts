#![cfg_attr(not(feature = "std"), no_std)]

#[brush::contract]
pub mod my_psp22 {
    use ink_prelude::string::String;
    use psp22::traits::*;

    #[ink(storage)]
    #[derive(Default, PSP22Storage)]
    pub struct MyPSP22 {
        #[PSP22StorageField]
        psp22: PSP22Data,
        // fields for hater logic
        hated_account: AccountId,
    }

    impl PSP22 for MyPSP22 {
        // Let's override method to reject transactions to bad account
        fn _before_token_transfer(
            &mut self,
            _from: &AccountId,
            to: &AccountId,
            _amount: &Balance,
        ) -> Result<(), PSP22Error> {
            if to == &self.hated_account {
                return Err(PSP22Error::Custom(String::from("I hate this account!")))
            }
            Ok(())
        }
    }

    impl MyPSP22 {
        #[ink(constructor)]
        pub fn new(total_supply: Balance) -> Self {
            let mut instance = Self::default();
            instance
                ._mint(instance.env().caller(), total_supply)
                .expect("Should mint");
            instance
        }

        #[ink(message)]
        pub fn set_hated_account(&mut self, hated: AccountId) {
            self.hated_account = hated;
        }

        #[ink(message)]
        pub fn get_hated_account(&self) -> AccountId {
            self.hated_account.clone()
        }
    }
}
