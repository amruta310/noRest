

'use strict';

const mongoose = require('mongoose'),
    Donation = mongoose.model('Donation');

    exports.search = function (params) {
        const promise = Donation.find(params).exec();
        return promise;
    };

    exports.save = function (donation) {
        const newDonation = new Donation(donation);
        const promise = newDonation.save();
        return promise;
    };

    exports.get = function (donationId) {
        const promise = Donation.findById(donationId).exec();
        return promise
    };

    exports.update = function (Donation) {
        Donation.modified_date = new Date();
        const promise = Donation.findOneAndUpdate({_id: Donation._id},Donation).exec();
        return promise;
    };


    exports.delete = function (donationId) {
        const promise = Donation.remove({_id: donationId});
        return promise;
    };